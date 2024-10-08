# DocumentCapture Web Component

## Overview

The `DocumentCaptureScreens` is a bespoke web component designed for capturing document images using a camera. It leverages the `SmartCamera` module for camera interaction and permission management.
This component contains the flow for capturing both front and the back of id documents.

### Importing the Component

To utilize the `DocumentCaptureScreens` component within your project, import it into your JavaScript file as follows:

```js
import '@smileid/components/document-capture';
```

### Using the Component

The DocumentCapture component can be embedded in your HTML similarly to any standard HTML element:

```html
<document-capture-screens></document-capture-screens>
```

### Attributes

Customize the component's behavior with the following attributes:

#### `hide-instructions`

Omits the capture instructions. This attribute is boolean and does not require a value.

```html
<document-capture-screens hide-instructions></document-capture-screens>
```

#### `hide-back-of-id`

Excludes the option to capture the ID's back side. This attribute is boolean.

```html
<document-capture-screens hide-back-of-id></document-capture-screens>
```

#### `show-navigation`

Displays navigation controls for the capture process. This attribute is boolean.

```html
<document-capture-screens show-navigation></document-capture-screens>
```

#### `document-capture-modes`

Specifies the capture modes, accepting `camera`, `upload`, or both. Value required.

```html
<document-capture-screens
  document-capture-modes="camera,upload"
></document-capture-screens>
```

### Permissions

Camera permissions are essential for functionality. The component requests permissions automatically. Upon granting, `data-camera-ready` is set to true, and `data-camera-error` is removed. Denied permissions result in `data-camera-error` being set with an error message.

For manual permission handling, appropriately set `data-camera-ready` and `data-camera-error`.

### Error Handling

Errors during permission requests or document capture are managed by the component, setting `data-camera-error` with the respective error message.

### Event Handlers

Capture events emit `document-capture-screens.publish`, providing captured images and metadata:

```json
{
  "detail": {
    "images": [{ "image": "base64-encoded image", "image_type_id": "" }],
    "meta": {
      "version": "library version"
    }
  }
}
```

To handle this event:

```js
document
  .querySelector('document-capture-screens')
  .addEventListener('document-capture-screens.publish', function (event) {
    console.log(event.detail);
  });
```

### Dependencies

`DocumentCaptureScreens` relies on the following modules:

- [document-capture-instructions](./document-capture-instructions/README.md)
- [document-capture](./document-capture/README.md)
- [document-capture-review](./document-capture-review/README.md)
- [SmartCamera](../../../domain/camera/src/README.md)
- [FileUpload](../../../domain/file-upload/README.md)

These dependencies are automatically imported with the component.

### Compatibility

Designed for modern browsers supporting custom web components, with specific enhancements for multi-camera Samsung devices to prevent blurry image edges. Report compatibility issues with other devices to our support team.
