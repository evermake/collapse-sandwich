# collapse-sandwich

## Short guide
To create your sandwich just add these lines to your html file:

```HTML
<div id="my-container">
    ...
</div>

<button class="collapse-sandwich" target-id="my-container">
    <span class="collapse-sandwich__bar collapse-sandwich__bar--top"></span>
    <span class="collapse-sandwich__bar collapse-sandwich__bar--middle"></span>
    <span class="collapse-sandwich__bar collapse-sandwich__bar--bottom"></span>
</button>
...
<script src="/scripts/collapse-sandwich.js"></script>
```

Include *__collapse-sandwich.scss__* to your scss file. You can also modify variables as you wish.

Clicking on a sandwich by default make two things: toggle class *active* of the sandwich and toggle class *expanded* of the element with id which you set in the *target-id* attribute of the sandwich.

## Enjoy it!