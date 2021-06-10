# Redux Store
[Link](https://www.youtube.com/watch?v=YAevAj6X6XU&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=7)

* One store for the entire applicaiton
* Responsibilities:
    1. Holds application state
    2. Allows acess to state via ***getState()***
    3. Allows state to be updated via ***dispatch(action)***
    4. Registers listeners via ***subscribe(listener)***
    5. Handles unregistering of listeners via the function returned by subscribe(listener)