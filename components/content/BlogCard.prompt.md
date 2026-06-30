# BlogCard

A single entry in the blog index — deliberately minimal, in the Thinking Machines mould. Topic kicker, large serif title (underlines on hover), serif dek, and a mono date · reading-time line. Separated by hairlines.

```jsx
<BlogCard
  topic="Inference"
  title="How vLLM works internally — a deep dive"
  dek="PagedAttention, continuous batching, and the block manager, from first principles."
  date="Jun 2026"
  readingTime="12 min read"
  href="#post"
/>
```

Stack directly in a column; each card draws its own bottom hairline. Keep the index to a single narrow column (~700px).
