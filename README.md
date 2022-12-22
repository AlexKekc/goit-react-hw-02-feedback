# Feedback Widget

I created an application for collecting statistics. There are only three options
for feedback: good, neutral and bad.

## Step 1

The app display the number of collected reviews for each category. The app is
not store feedback statistics between different sessions (page refresh).

The state of the application must be as follows, you cannot add new properties.

```jsx
state = {
  good: 0,
  neutral: 0,
  bad: 0,
};
```

## Step 2

Expanded the functionality of the application so that the interface displays
more statistics about the collected reviews. Added a display of the total number
of collected reviews from all categories and the percentage of positive reviews.
Created helper methods `countTotalFeedback()` and
`countPositiveFeedbackPercentage()` that calculate these values based on the
data in the state (calculated data).

## Step 3

Refactored the application. The application state should remain in the root
<App>`` component.

- Moved the statistics display to a separate component
  `<Statistics good={} neutral={} bad={} total={} positivePercentage={}>`.
- Putted the block of buttons in the component
  `<FeedbackOptions options={} onLeaveFeedback={}>`.
- Created a `<Section title="">` component that renders a section with a title
  and children. Wraped each of `<Statistics>` and `<FeedbackOptions>` in the
  created section component.

## Step 4

Extended the functionality of the application so that the statistics block is
rendered only after at least one feedback has been collected. Put the message
about the absence of statistics in the
`<Notification message="There is no feedback">` component.
