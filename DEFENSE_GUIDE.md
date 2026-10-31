# Assignment 6 — подготовка к защите

**Student:** Bakdaulet Begaliev | **Group:** SE-2526

## Что сказать в начале

My project is Assignment 6 about jQuery. It has five pages. I used jQuery to select elements, show and hide content, change the HTML page, animate boxes, and create an accordion menu. Every part is interactive.

## Самое главное

- **jQuery** — библиотека JavaScript, которая делает работу с HTML-элементами проще.
- **`$()`** — выбирает HTML-элемент (например, `$("#demo")` выбирает элемент с `id="demo"`).
- **`$(document).ready(function () { ... })`** — код запускается, когда HTML-страница готова.
- **`.click(function () { ... })`** — действие при нажатии на кнопку.
- **`this`** — элемент, по которому нажали.
- **ID selector:** `$("#id")`; **class selector:** `$(".class")`; **tag selector:** `$("h3")`.

## По заданиям

| Task | Файл | Что демонстрировать |
| --- | --- | --- |
| 0 | `js/basics.js` | В консоли `jQuery is ready!` |
| 1 | `js/basics.js` | `.text()` заменяет текст, `.html()` вставляет HTML, `.css()` меняет стиль |
| 2 | `js/effects.js` | Hide скрывает, Show показывает, Toggle переключает |
| 3 | `js/effects.js` | Fade In / Fade Out / Fade Toggle плавно меняют видимость картинки |
| 4 | `js/effects.js` | Slide Up / Down / Toggle раскрывают и закрывают панель |
| 5 | `js/dom.js` | `.append()` в конец, `.prepend()` в начало, `.remove()` удаляет |
| 6 | `js/dom.js` | `.attr()` меняет `src` картинки и `href` ссылки |
| 7 | `js/dom.js` | `.val()` читает ввод, `.text()` показывает его; событие `input` срабатывает при печати |
| 8 | `js/animations.js` | `.animate()` увеличивает квадрат и двигает его |
| 9 | `js/animations.js` | Несколько `.animate()` выполняются друг за другом |
| 10 | `js/animations.js` | Один `.animate()` одновременно меняет размер, положение, прозрачность |
| 11 | `js/project.js` | FAQ Accordion: нажал вопрос → `slideToggle()` открыл/закрыл ответ |

## Возможные вопросы преподавателя

**1. What is the difference between JavaScript and jQuery?**  
JavaScript is the programming language. jQuery is a library written in JavaScript.

**2. What is the DOM?**  
DOM is the page structure. JavaScript and jQuery can change its elements.

**3. What is a selector?**  
A selector finds HTML elements by ID, class or tag.

**4. `.text()` vs `.html()`?**  
`.text()` writes plain text. `.html()` can insert HTML tags such as `<strong>`.

**5. `.hide()` vs `.fadeOut()`?**  
`.hide()` hides immediately. `.fadeOut()` hides smoothly.

**6. `.slideToggle()` vs `.toggle()`?**  
Both change visibility, but `.slideToggle()` uses a sliding animation.

**7. `.append()` vs `.prepend()`?**  
Append adds at the end. Prepend adds at the beginning.

**8. What is `.attr()`?**  
It reads or changes HTML attributes, for example image `src` and link `href`.

**9. What does `.val()` do?**  
It gets the current value of an input.

**10. Why is `event.preventDefault()` used?**  
It prevents the form from reloading the page on submit.

**11. What is `.animate()`?**  
It smoothly changes numeric CSS properties, like width, height, left, top and opacity.

**12. What is your mini project?**  
An Accordion Menu. I click a question to expand or collapse its answer with `.slideToggle()`.

## Быстрая практика перед дэфом

1. Открой `index.html`, F12 → Console, покажи `jQuery is ready!`.
2. Нажми Run selectors и объясни `#`, `.`, `h3`.
3. На Effects покажи все девять кнопок.
4. На DOM добавь/удали пункт, поменяй картинку и ссылку, напечатай имя.
5. На Animations запусти три анимации и Reset.
6. На Mini Project открой два вопроса и нажми Close all.
