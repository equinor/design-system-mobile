# Progress

The `Progress` component provides a structured way to display the progress of one or more tasks, each represented by a `Progress.Item`. It supports task grouping, status indicators, error handling, and EDS theming.

<img src="/assets/images/Progress.png" width="400" alt="Progress"/>

Progress component when handling more than one task.
<img src="/assets/images/ProgressPerformingTask.png" width="400" alt="Progress Performing Task"/>

## Usage

```tsx
import { Progress } from "@equinor/eds-mobile";

<Progress>
  <Progress.Item
    title="Upload files"
    status="inProgress"
    description="Uploading 3 of 5 files"
  />
  <Progress.Item
    title="Process data"
    tasks={[
      { title: "Step 1", status: "success" },
      { title: "Step 2", status: "inProgress" },
    ]}
  />
</Progress>;
```

## Progress Props

| Name       | Type                                    | Default | Description                    |
| ---------- | --------------------------------------- | ------- | ------------------------------ |
| `children` | Progress.Item or array of Progress.Item | _(req)_ | The progress items to display. |

## Progress.Item Props

| Name                    | Type                                                 | Default | Description                                               |
| ----------------------- | ---------------------------------------------------- | ------- | --------------------------------------------------------- |
| `title`                 | string                                               | _(req)_ | Title for the progress item.                              |
| `status`                | "success" \| "error" \| "notStarted" \| "inProgress" |         | Status of the item (required if `tasks` is not provided). |
| `tasks`                 | ProgressTask[]                                       |         | Array of tasks; overall status is computed from these.    |
| `description`           | string \| (completed, total) => string               |         | Description below the title.                              |
| `onRetryButtonPress`    | (task: ProgressTask) => void                         |         | Callback for retrying a failed task.                      |
| `onCopyTextButtonPress` | (task: ProgressTask) => void                         |         | Callback for copying error message text.                  |
| ...rest                 | ViewProps                                            |         | Additional props for the item container.                  |

### ProgressTask

| Name        | Type                                                 | Description                 |
| ----------- | ---------------------------------------------------- | --------------------------- |
| `title`     | string                                               | Title of the task.          |
| `icon`      | IconName                                             | Optional icon for the task. |
| `iconColor` | "primary" \| "secondary" \| "danger"                 | Color of the icon.          |
| `status`    | "success" \| "error" \| "notStarted" \| "inProgress" | Status of the task.         |
| `error`     | ProgressTaskError                                    | Optional error details.     |

### ProgressTaskError

| Name         | Type   | Description                                  |
| ------------ | ------ | -------------------------------------------- |
| `message`    | string | Error message.                               |
| `code`       | string | Optional error code.                         |
| `suggestion` | string | Optional suggestion for resolving the error. |

## Theming & Styling

- Uses EDS tokens for spacing, colors, and status indicators.
- Items are separated by dividers.
- Supports responsive layout and expandable sections for grouped tasks.

## Accessibility

- All standard accessibility props for `View` are supported.
- Status indicators and error messages are accessible.

## Example

```tsx
<Progress>
  <Progress.Item
    title="Download"
    status="success"
    description="Download complete"
  />
  <Progress.Item
    title="Process"
    tasks={[
      { title: "Step 1", status: "success" },
      {
        title: "Step 2",
        status: "error",
        error: { message: "Failed to process" },
      },
    ]}
    onRetryButtonPress={(task) => retryTask(task)}
  />
</Progress>
```

## Related

- [EDS Theming](../README.md#theming)
- [Icon](./Icon.md) – For task icons.
