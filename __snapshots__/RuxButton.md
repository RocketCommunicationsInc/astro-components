# `RuxButton`

#### `renders empty button correctly`

```html
<button class="rux-button">
  <rux-icon
    color="#ffffff"
    hidden=""
    icon=""
    style="--iconDefaultColor:#ffffff;"
  >
  </rux-icon>
  <slot>
  </slot>
</button>

```

#### `is default`

```html
<button class="rux-button">
  <rux-icon
    color="#ffffff"
    hidden=""
    icon=""
    style="--iconDefaultColor:#ffffff;"
  >
  </rux-icon>
  <slot>
  </slot>
</button>

```

#### `is outlined`

```html
<button class="rux-button rux-button--outline">
  <rux-icon
    color="rgb(0, 90, 143)"
    hidden=""
    icon=""
    style="--iconDefaultColor:rgb(0, 90, 143);"
  >
  </rux-icon>
  <slot>
  </slot>
</button>

```

#### `is disabled`

```html
<button
  class="rux-button"
  disabled=""
>
  <rux-icon
    color="#ffffff"
    hidden=""
    icon=""
    style="--iconDefaultColor:#ffffff;"
  >
  </rux-icon>
  <slot>
  </slot>
</button>

```

#### `handles disabled values`

```html
<button
  class="rux-button"
  disabled=""
>
  <rux-icon
    color="#ffffff"
    hidden=""
    icon=""
    style="--iconDefaultColor:#ffffff;"
  >
  </rux-icon>
  <slot>
  </slot>
</button>

```

#### `is small`

```html
<button class="rux-button rux-button--small">
  <rux-icon
    color="#ffffff"
    hidden=""
    icon=""
    style="--iconDefaultColor:#ffffff;"
  >
  </rux-icon>
  <slot>
  </slot>
</button>

```

#### `is large`

```html
<button class="rux-button rux-button--large">
  <rux-icon
    color="#ffffff"
    hidden=""
    icon=""
    style="--iconDefaultColor:#ffffff;"
  >
  </rux-icon>
  <slot>
  </slot>
</button>

```

#### `should ignore invalid size`

```html
<button class="rux-button rux-button--green">
  <rux-icon
    color="#ffffff"
    hidden=""
    icon=""
    style="--iconDefaultColor:#ffffff;"
  >
  </rux-icon>
  <slot>
  </slot>
</button>

```

#### `should ignore invalid icon`

```html
<button class="rux-button">
  <rux-icon
    color="#ffffff"
    icon="qwerty"
    style="--iconDefaultColor:#ffffff;"
  >
  </rux-icon>
  <slot>
  </slot>
</button>

```

#### `handles nonsense icon`

```html
<button class="rux-button">
  <rux-icon
    color="#ffffff"
    icon="qwerty"
    style="--iconDefaultColor:#ffffff;"
  >
  </rux-icon>
  <slot>
  </slot>
</button>
```

#### `is nothing`

```html
<button class="rux-button rux-button--green">
  <rux-icon
    color="#ffffff"
    hidden=""
    icon=""
    style="--iconDefaultColor:#ffffff;"
  >
  </rux-icon>
  <slot>
  </slot>
</button>
```

#### `renders button correctly`

```html
<button class="rux-button">
  <rux-icon
    color="#ffffff"
    hidden=""
    icon=""
    style="--iconDefaultColor:#ffffff;"
  >
  </rux-icon>
  <slot>
  </slot>
</button>
```

