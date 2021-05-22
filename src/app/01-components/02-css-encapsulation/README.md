# CSS encapsulation or (View encapsulation)

Component CSS styles are encapsulated into the component's view and don't affect the rest of the application

To control how this encapsulation happens on a per component basis, you can set the view encapsulation mode in the component metadata.
* ShadowDom
* Emulated (the default)
* None

To set the component's encapsulation mode, use the encapsulation property in the component decorator metadata:
