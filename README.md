# draw-a-sketch-2

## Development

Begun: 18.7.2024

### Dev Stages

#### Dev Stage 1

19.7.2024

Minimal UI with basic functionality

- [x] Basic UI
    - Info, Canvas, Settings
- [ ] Implement generateCanvas(size)
    - Creates canvas, with each pixel having event listener, that'll add specific value to array in specific place
- [ ] Implement canvas saving and loading
    - [ ] Save canvas
    - [ ] Download canvas
    - [ ] Load canvas
    - [ ] Load canvas from file
- [ ] Implement settings

### Planning

Simple pixel drawing app with the ability to store drawing on device. Goal of the project being to learn to develop mildly complex projects. Core design requirements are responsive design, and intuitive user experience.

#### UI

Height no more than 100vh, relaxed minimal styling

Left on opening website

- List of past 50 saved drawings, overflow deleted
    - Name, date, delete button (requires pressing twice to delete, increasing color)
- Note at bottom about oldest drawings being deleted if over 50 drawing
- Link to GitHub repo at bottom
- Delete all button, requires confirmation via pop up requesting user to write "CONFIRM"
- Content overflow set to make the overflow be scrollable locally
- Hidden when drawing begins

Left when drawing

- Drawing name input
- Save button
- View past drawing button at bottom -> opens list at bottom left

Middle

- Drawing area, by default 32x32 grid
- Small borders between squares, border collapse on

Right setting

- Grid size
- Generate new grid
- 16 color palette
- Shading mode
- Drawing mode
    - On hover
    - On press

#### UX

A new drawing

Website opened -> Draw -> Left side changes to saving options -> Save -> List of past drawing on left -> Continue drawing -> Left side changes to saving options -> ...

Website opened -> Selects saved drawing -> Draw -> Left side changes to saving options -> ...

#### Saving

Example of storing data locally in browser:

```javascript
// Storing
const data = { name: "John", age: 30 };
localStorage.setItem('userData', JSON.stringify(data));

// Retrieving
const retrievedData = JSON.parse(localStorage.getItem('userData'));
```

##### Data structure

- Saves
    - saveID
        - Name
        - Date and time
        - Program versio
        - Drawing data
            - Size (must be 1/1 aspect ratio, so only one integer stored)
            - Drawing
                - Each row in array
                - Each pixel in array
                - Each pixel's RGB value in array

#### Future features

- Allowing to download drawing in JSON. Allowing to load those files too.
- A way to easily share drawings
- Ability to download drawings as PNG
- Ability to make animations
    - Onion skin
    - Frame rate
    - Preview
    - Ability to export animations as GIF