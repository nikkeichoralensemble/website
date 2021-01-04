setup(
    # ...,
    setup_requires=['libsass >= 0.6.0'],
    sass_manifests={
        'website': ('static/sass', 'static/css', '/static/css')
    }
)