# Tabs

Text-style navigation tabs with a clay underline that slides under the active tab. Drives the portfolio's top-level sections (About / Blog / Work in Progress / Projects).

```jsx
const [tab, setTab] = React.useState('about');
<Tabs
  value={tab}
  onChange={setTab}
  items={['about', 'blog', 'work in progress', 'projects']}
/>
```

Items may be plain strings, or `{ value, label }` objects. Controlled — track `value` yourself.
