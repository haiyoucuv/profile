// Keeps the state of keys/buttons
//
// You can check
//
//   inputManager.keys.left.down
//
// to see if the left key is currently held down
// and you can check
//
//   inputManager.keys.left.justPressed
//
// To see if the left key was pressed this frame
//
// Keys are 'left', 'right', 'a', 'b', 'up', 'down'
class InputManager {
    private readonly keys: { [p: string]: { down: boolean, justPressed: boolean } };

    constructor() {
        this.keys = {};
        const keyMap = new Map();

        const setKey = (keyName, pressed) => {
            const keyState = this.keys[keyName];
            keyState.justPressed = pressed && !keyState.down;
            keyState.down = pressed;
        };

        const addKey = (keyCode, name) => {
            this.keys[name] = { down: false, justPressed: false };
            keyMap.set(keyCode, name);
        };

        const setKeyFromKeyCode = (keyCode, pressed) => {
            const keyName = keyMap.get(keyCode);
            if (!keyName) {
                return;
            }
            setKey(keyName, pressed);
        };

        addKey(37, "left");
        addKey(39, "right");
        addKey(38, "up");
        addKey(40, "down");
        addKey(90, "a");
        addKey(88, "b");

        window.addEventListener("keydown", (e) => {
            setKeyFromKeyCode(e.keyCode, true);
        });
        window.addEventListener("keyup", (e) => {
            setKeyFromKeyCode(e.keyCode, false);
        });
    }

    update() {
        for (const keyState of Object.values(this.keys)) {
            if (keyState.justPressed) {
                keyState.justPressed = false;
            }
        }
    }
}