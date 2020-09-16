// gulp
const { src, dest, parallel, series, watch } = require('gulp');

// модули
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const del = require('del');
const cryptoRandomString = require('crypto-random-string');
const replace = require('gulp-replace');

let randomVersion = cryptoRandomString({length: 8});

// функции
function browsersync() {
	browserSync.init({
		server: { baseDir: 'app/' },
		notify: false,
		online: true
	})
}

function scripts() {
	// сборка отдельных файлов
	return src([
		'node_modules/jquery/dist/jquery.min.js',
		'app/js/jquery.parallaxify.min.js',
		'app/js/jquery.validate.min.js',
		'app/js/fancybox.js',
		'app/js/slick.min.js',
		'app/js/jquery.lettering.js',
		'app/js/jquery.textillate.js',
		'app/js/scroll-to-fancy.min.js',
		'app/js/jquery.youtube-background.js',
		'node_modules/flatpickr/dist/flatpickr.min.js',
		'node_modules/flatpickr/dist/l10n/ru.js',
		'app/js/app.js',
		])
	.pipe(concat('app.min.js'))
	.pipe(uglify())
	.pipe(dest('app/js/'))
	.pipe(browserSync.stream())
}

function styles() {
	// сборка отдельных файлов
	return src([
		'app/css/normalize.css',
		'app/css/fancybox.css',
		'app/css/slick.css',
		'app/css/animate.min.css',
		'app/css/scroll-to-fancy.min.css',
		'node_modules/flatpickr/dist/flatpickr.min.css',
		'node_modules/flatpickr/dist/themes/airbnb.css',
		'app/sass/main.sass',
		])
	.pipe(sass())
	.pipe(concat('app.min.css'))
	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
	.pipe(cleancss( { level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ } ))
	.pipe(dest('app/css/'))
	.pipe(browserSync.stream())
}

function images() {
	return src('app/img/src/**/*')
	.pipe(newer('app/img/dest/'))
	.pipe(imagemin())
	.pipe(dest('app/img/dest/'))
}

function cleanimg() {
	return del('app/img/dest/**/*', { force: true })
}

function startwatch() {
	watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
	watch('app/**/sass/**/*', styles);
	watch('app/**/*.html').on('change', browserSync.reload);
	watch('app/img/src/**/*', images);
}

function buildcopy() {
	return src([
		'app/css/app.min.css',
		'app/js/app.min.js',
		'app/img/dest/**/*',
		'app/php/**/*',
		'app/fonts/**/*',
		'app/**/*.html',
		], { base: 'app' })
	.pipe(dest('dist'))
}

function versionFile(){
	return src('dist/*.html')
		.pipe(replace('app.min.css', 'app.min.css?v=' + randomVersion + ''))
		.pipe(replace('app.min.js', 'app.min.js?v=' + randomVersion + ''))
		.pipe(replace('img/src/', 'img/dest/'))
	.pipe(dest('dist'))
}

function renameCSSimage(){
	return src('dist/css/app.min.css')
		.pipe(replace('../img/src/', '../img/dest/'))
	.pipe(dest('dist/css'))
}


function cleandist() {
	return del('dist/**/*', { force: true })
}

// таски
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.cleanimg = cleanimg;

exports.default = parallel(styles, scripts, browsersync, startwatch);
exports.build = series(cleandist, styles, scripts, images, buildcopy, versionFile, renameCSSimage);