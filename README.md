### Worded Expressions
An English-like way for querying Regular Expressions

**Special functions**

1. Email validation
2. Phone number validation

```console
WordedExpression("FIND a IN happy")
> a

WordedExpression("REPLACE a WITH b IN happy")
> hbppy

WordedExpression("IS p IN happy")
> true

WordedExpression("COUNT p IN happy")
> 2
```
