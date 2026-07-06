# Hands on 4: Spring Core XML Country Configuration

This project demonstrates how to configure and load Spring beans dynamically using XML configuration files and ClassPathXmlApplicationContext.

---

## Technical Walkthrough & SME Concepts

### 1. Spring XML Configuration Elements
In our **[`country.xml`](file:///d:/Cognizant%20DN%205.0/cognizant_DN_5.0-JavaFSE/Spring%20REST/Hands%20on%204%28SPRING%20REST%29/src/main/resources/country.xml)** configuration file, we declare our bean as follows:

```xml
<bean id="country" class="com.cognizant.springlearn.Country">
    <property name="code" value="IN" />
    <property name="name" value="India" />
</bean>
```

- **`<bean>` tag**: Tells the Spring IoC container to manage an instance of a Java object.
  - **`id` attribute**: A unique identifier for the bean within the container. We use this ID (`country`) to look up and retrieve the bean instance from the application context.
  - **`class` attribute**: The fully qualified Java class name of the bean to be instantiated. The container uses reflection to invoke the default constructor of this class.
- **`<property>` tag**: Inject values or references into the bean's properties.
  - **`name` attribute**: The name of the property. Under the hood, Spring matches this with the corresponding setter method following Java Beans naming conventions (`setCode` for `code`, `setName` for `name`).
  - **`value` attribute**: The literal value to be injected into the property. Spring automatically converts the string representation to the target field type.

---

### 2. ApplicationContext vs ClassPathXmlApplicationContext
- **`ApplicationContext`**: The core interface in Spring representing the IoC container. It is responsible for instantiating, configuring, and assembling beans, and extends `BeanFactory` with enterprise-specific features like internationalization, event publishing, and AOP.
- **`ClassPathXmlApplicationContext`**: A concrete implementation of `ApplicationContext` that reads configurations from XML files located on the application classpath (e.g., inside `src/main/resources`).

---

### 3. What happens when `context.getBean()` is invoked?
1. By default, beans configured in XML are **Singletons** and are **eagerly instantiated** during context initialization (when `ClassPathXmlApplicationContext` is constructed).
2. When you invoke `context.getBean("country", Country.class)`, Spring does not create a new object. Instead, it performs a lookup in its internal registry (a singleton map) and returns the pre-existing, fully initialized bean instance.
3. If the bean scope was configured as `prototype`, Spring would construct a new instance, execute dependency injection, and return it every time `getBean()` is called.

---

## Log Output Analysis

When the application runs, it generates the following console output:

```text
2026-07-06T11:32:31.813+05:30  INFO 524 --- [           main] c.c.springlearn.SpringLearnApplication   : Initializing ClassPathXmlApplicationContext...
2026-07-06T11:32:32.207+05:30 DEBUG 524 --- [           main] com.cognizant.springlearn.Country        : Inside Country Constructor.
2026-07-06T11:32:32.210+05:30 DEBUG 524 --- [           main] com.cognizant.springlearn.Country        : Inside setCode() setter method. Setting code: IN
2026-07-06T11:32:32.212+05:30 DEBUG 524 --- [           main] com.cognizant.springlearn.Country        : Inside setName() setter method. Setting name: India
2026-07-06T11:32:32.213+05:30  INFO 524 --- [           main] c.c.springlearn.SpringLearnApplication   : Retrieving country bean from context...
2026-07-06T11:32:32.213+05:30 DEBUG 524 --- [           main] c.c.springlearn.SpringLearnApplication   : Country : Country [code=IN, name=India]
```

### Flow Execution Breakdown
1. **Instantiation**: During `ClassPathXmlApplicationContext` initialization, Spring invokes the default constructor of the `Country` class (`Inside Country Constructor.`).
2. **Property Injection**: Spring calls the setter methods sequentially to inject the configured values (`Inside setCode() ...` and `Inside setName() ...`).
3. **Registry Lookup**: When `context.getBean()` is invoked, the logger shows that the fully populated bean is retrieved directly from the container registry without invoking constructor or setter methods again.

## ScreenShot

---
<img width="963" height="537" alt="image" src="https://github.com/user-attachments/assets/16223b92-026d-4e0a-878b-d74103922634" />

---
