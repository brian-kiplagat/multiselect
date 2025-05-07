# Bobby Select - Flexible Multiselect Component

A highly customizable, accessible, and feature-rich multiselect component built with TypeScript. Designed to work both in forms and as standalone UI elements.

## Features

- **Flexible Usage**: Works seamlessly inside forms or as a standalone component
- **Customizable Appearance**: Control appearance through various configuration options
- **Keyboard Navigation**: Full keyboard support for accessibility
- **Form Integration**: Proper form association with validation
- **Custom Styling**: Isolated styling through attribute selectors (no class conflicts)
- **Accessible**: Built with ARIA attributes for screen readers
- **Multiple Display Modes**: Different tag display options including "below input" layout
- **Lightweight**: No dependencies, just vanilla TypeScript

## Installation

1. Copy the source files into your project:

   - `src/constants.ts`
   - `src/multiSelect.ts`
   - `src/styles.ts`

2. Import and use the component in your application:
   ```typescript
   import { MultiSelect } from "./path/to/multiSelect.ts";
   ```

## Usage

### Basic Example

```typescript
const container = document.getElementById("my-select");
if (container) {
  new MultiSelect({
    container,
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    placeholder: "Select options...",
    onChange: (selected) => {
      console.log("Selected values:", selected);
    },
  });
}
```

### Form Integration

```typescript
const formSelect = document.getElementById("form-select");
if (formSelect) {
  new MultiSelect({
    container: formSelect,
    options: options,
    name: "my-field",
    placeholder: "Select items...",
    required: true,
    formAssociated: true,
    validationMessage: "Please select at least one option",
  });
}
```

### Skills Input Example

```typescript
const skillsInput = document.getElementById("skills-input");
if (skillsInput) {
  new MultiSelect({
    container: skillsInput,
    options: skillsOptions,
    placeholder: "Add skills...",
    allowCreation: true,
    searchable: true,
    clearable: true,
    hideDropdownOnSelect: true,
    onCreateOption: (value) => {
      return { value, label: value };
    },
  });
}
```

## Configuration Options

The component accepts the following configuration options:

### Required

- `container`: HTMLElement - The container where the multiselect will be rendered
- `options`: Array of `Option` objects with `value` and `label` properties

### Appearance

- `name?`: string - Name attribute for form association
- `placeholder?`: string - Placeholder text for the input
- `className?`: string - Additional class names for the container
- `maxWidth?`: string - Maximum width of the component
- `maxHeight?`: string - Maximum height of the dropdown

### Behavior

- `selected?`: string[] - Pre-selected values
- `disabled?`: boolean - Whether the component is disabled
- `readOnly?`: boolean - Whether the component is read-only
- `required?`: boolean - Whether selection is required (for forms)
- `clearable?`: boolean - Show clear button to remove all selections
- `searchable?`: boolean - Enable filtering options by typing
- `allowCreation?`: boolean - Allow creating new options
- `hideDropdownOnSelect?`: boolean - Close dropdown after selecting an option
- `maxItems?`: number - Maximum number of items that can be selected
- `maxTags?`: number - Maximum number of tags to display before showing a count

### Validation

- `formAssociated?`: boolean - Whether to associate with a form via hidden input
- `validationMessage?`: string - Custom validation message
- `customValidation?`: Function - Custom validation function

### Callbacks

- `onChange?`: Function - Called when selection changes
- `onOpen?`: Function - Called when dropdown opens
- `onClose?`: Function - Called when dropdown closes
- `onCreateOption?`: Function - Called when a new option is created
- `onFocus?`: Function - Called when the component receives focus
- `onBlur?`: Function - Called when the component loses focus

## API Methods

Once instantiated, the component instance provides the following methods:

```typescript
const multiSelect = new MultiSelect({
  /* config */
});

// Get selected values
const selected = multiSelect.getSelected();

// Set selected values
multiSelect.setSelected(["value1", "value2"]);

// Add a new option
multiSelect.addOption({ value: "newOption", label: "New Option" });

// Clear all selections
multiSelect.clear();

// Open dropdown
multiSelect.open();

// Close dropdown
multiSelect.close();

// Enable component
multiSelect.enable();

// Disable component
multiSelect.disable();

// Set read-only state
multiSelect.setReadOnly(true);

// Validate current selection
const validation = multiSelect.validate();

// Destroy component and remove event listeners
multiSelect.destroy();
```

## Customizing Attribute Names

The component uses custom attributes instead of classes to avoid styling conflicts. You can easily change the attribute prefix in `constants.ts`:

```typescript
// Change this value to customize the attribute namespace
export const COMPONENT_PREFIX = "bobby-select";
```

All attributes and CSS will automatically update to use your custom prefix.

## Browser Support

- All modern browsers (Chrome, Firefox, Safari, Edge)
- IE11 with appropriate polyfills for template literals and other ES6+ features

## License

MIT

## Contributing

Feel free to submit issues or pull requests to improve the component.
