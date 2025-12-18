# Short Response

## Question 1

For each scenario, identify whether the relationship is **inheritance** or **composition**, and provide a brief explanation.

For example, a `Song` and a `MediaItem` have an inheritance relationship because "a song is a type of media item". Meanwhile a team and player have a composition relationship because "a team has many players".

1. A `Car` class and an `Engine` class, where a car contains an engine
2. A `Dog` class and an `Animal` class, where a dog is a type of animal
3. A `Classroom` class and a `Student` class, where a classroom contains multiple students
4. A `Rectangle` class and a `Shape` class, where a rectangle is a type of shape
5. A `Computer` class and a `CPU` class, where a computer contains a CPU
6. A `Manager` class and an `Employee` class, where a manager is a type of employee

### Response 1

1. Your response...
2. Your response...
3. Your response...
4. Your response...
5. Your response...
6. Your response...

---

## Question 2

In Problem 1, you are asked to implement a `Song`, `Podcast`, and `Audiobook` classes that all extend the `MediaItem` base class. Each class has their own `play()` method. This demonstrates **polymorphism**.

In your own words, explain what polymorphism means and why it is useful. Use the `MediaItem` example from this assignment to support your explanation.

### Response 2

Polymorphism means that different objects can respond to the same method or interface in different ways. Even though the method name is the same, the behavior can change depending on the object that is using it.

It is useful because it allows us to write flexible and reusable code. With polymorphism, we can treat different objects as if they are the same type, while still allowing each object to have its own specific behavior. This makes code easier to extend—new behaviors can be added without changing existing code—and improves readability and maintainability.

For example, if multiple classes share a method like `makeSound()`, each class can implement it differently, but the code that calls makeSound() doesn’t need to know which specific class it’s working with.

---

## Question 3

In JavaScript classes, properties and methods can be either **instance-level** or **static**.

a) What is the difference between an instance property and a static property?

b) Give an example of when you would want to use a static property or method instead of an instance property or method.

### Response 3

a) Your response...

b) Your response...