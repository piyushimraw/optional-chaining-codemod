import { getProperty } from 'core/helpers';



const foo1  = getProperty(bar, "a.b.c");
const foo2  = getProperty(bar, "a.b.c");
const foo3  = getProperty(bar, "a.b.c");
const foo4  = getProperty(bar, "a[2].c");
const foo5  = getProperty(bar, ["a", foo5, "c"]);
const foo6  = getProperty(bar, ["a", 321, "c"]);
const foo7  = getProperty(bar, ["a", this.smthng, "c"]);
const foo8  = getProperty(bar, ["a", foo5, "c"], 123);
const foo9  = getProperty(bar, ["a", foo5, "c"], "what");
const foo10 = getProperty(bar, ["a", foo5, "c"], barr);
const foo11 = getProperty(bar, `a.${foo5}`);
const foo12 = getProperty(bar, `a.${foo5}.smthng`);
const foo13 = getProperty(bar, someKey);
const foo14 = getProperty(that.foo, that.bar);
const foo15 = getProperty(foo, 'bar[0]["60"]');
const foo16 = getProperty(foo, "bar.data-thing");
const foo17 = getProperty(foo, "data-bar[0].baz.data-thing", value);
const foo18 = getProperty(foo, getPath(name));
