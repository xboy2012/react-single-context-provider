# React Single Context Provider


DEMO: https://xs8qo.csb.app/

CodeSandBox: https://codesandbox.io/s/github/xboy2012/react-single-context-provider/tree/master/

In this demo, we created 4 components

+ `ComponentA` which consumes `SingleContext` but only use `a`
+ `ComponentB` which consumes `SingleContext` but only use `b`
+ `ComponentAB` which consumes `SingleContext` but only use `a` and `b`
+ `ComponentC` which consumes `SingleContext` but only use `c`
+ `ComponentD` which consumes no context but its children consumes some Context


To make it simple, we use random numbers to trigger Context value update.

Click `Change A`/`Change B`/`Change C` and see the console for what happened.


# Result

+ any of `a`/`b`/`c` will trigger all component that uses SingleContext UPDATED
+ Component with children consume changed Context WILL NOT UPDATE.

# Conclusion

Context value change is traced by the Provider value itself, not its child props.


# Recommend

Separate Context into several Small contexts will be better than a single Context.
