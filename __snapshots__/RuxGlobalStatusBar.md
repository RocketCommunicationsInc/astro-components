# `RuxGlobalStatusBar`

#### `renders default status bar correctly`

```html
<header>
  <div
    class="app-meta"
    hidden=""
  >
    <h1>
      false
      <span class="app-version">
      </span>
    </h1>
  </div>
  <slot>
  </slot>
</header>
```

#### `renders versioned status bar correctly`

```html
<header>
  <div
    class="app-meta"
    hidden=""
  >
    <h1>
      false
      <span class="app-version">
        0.0.1
      </span>
    </h1>
  </div>
  <slot>
  </slot>
</header>
```

#### `renders named status bar correctly`

```html
<header>
  <div class="app-meta">
    <h1>
      test
      <span class="app-version">
      </span>
    </h1>
  </div>
  <slot>
  </slot>
</header>
```

