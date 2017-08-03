# NgxPresents

Create a slides presentation using [Angular][ngHome]

## Who is this for?

* If you don't want to spend money on PowerPoint
* I'm a coder; I hate WYSIWYG GUIs.
* If you're more comfortable working in an Angular environment
* Want the power of HTML, CSS, JS in your presentation

## How does this work?

Of course with [Angular][ngHome] and good old-fashion [Angular-CLI](https://github.com/angular/angular-cli)

## How do I add slides?

1. Run `ng g m ../slides/slide-name -m slides.module.ts --spec=false`.
1. Run `ng g c slides/slide-name -m slides/slide-name/slide-name.module.ts --spec=false --export`.
1. Add `Route` to [slide-route-config.ts](src/app/slides/slide-route-config.ts) according to the transition order.

## To Start presenting

* Run `npm start`




[ngHome]: https://angular.io
