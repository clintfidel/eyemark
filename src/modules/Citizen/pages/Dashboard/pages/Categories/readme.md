# Categories

## routes

```javascript
${baseUrl}/categories
${baseUrl}/categories/sectors
${baseUrl}/categories/sdgs
${baseUrl}/categories/:cat/:id
```

## folder structure

```javascript
|--  Categories
    |-- __mock__
        |-- category.js
        |-- filter.json
        |-- sdgs.js
        |-- sectors.json
        |-- subcategory.json
    |-- components
        |-- cards.jsx
        |-- index.js
        |-- search.jsx
        |-- sort.jsx
    |-- pages
        |-- Screen1
            |-- index.jsx
            |-- screen1.test.js
            |-- style.scss
        |-- Screen2
            |-- index.jsx
            |-- screen2.test.js
            |-- style.scss
        |-- Screen3
            |-- index.jsx
            |-- screen3.test.js
            |-- style.scss
        |-- ScreenLast
            |-- index.jsx
            |-- screenLast.test.js
            |-- style.scss
    |-- index.jsx
    |-- readme.md
    |-- style.scss
```

## components

#### `Cards`

```javascript
Card01.propTypes = {
  image: PropTypes.any.isRequired,
  title: PropTypes.string,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  insight: PropTypes.object.isRequired
};

Card02.propTypes = {
  project_name: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string.isRequired,
  insight: PropTypes.object.isRequired
};

Card03.propTypes = {
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  images: PropTypes.any.isRequired
};
```

#### `Sort`

```javascript
Sort.propTypes = {
  items: PropTypes.array.isRequired
};
```

#### `Search`

```javascript
//no required props
```
