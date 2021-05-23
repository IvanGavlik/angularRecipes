# CSS encapsulation or (View encapsulation)

Component CSS styles are encapsulated into the component's view and don't affect the rest of the application

To control how this encapsulation happens on a per component basis, you can set the view encapsulation mode in the component metadata.
* ShadowDom
* Emulated (the default)
* None

To set the component's encapsulation mode, use the encapsulation property in the component decorator metadata:

The styles specified in @Component metadata apply only within the template of that component.
They are not inherited by any components nested within the template nor by any content projected into the component.

You can also import CSS files into the CSS files using the standard CSS @import rule. 

__When building with the CLI, you must configure the angular.json to include all external assets, including external style files.__
Register global style files in the styles section which, by default, is pre-configured with the global styles.css file.
For more [info](https://angular.io/guide/workspace-config#styles-and-scripts-configuration)
