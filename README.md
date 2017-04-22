[![Build Status](https://travis-ci.org/Jaspero/ng2-chips.svg?branch=master)](https://travis-ci.org/jaspero/ng2-chips)
[![NPM Version](https://img.shields.io/npm/v/@jaspero/ng2-chips.svg)](https://www.npmjs.com/package/@jaspero/ng2-chips)
# NG2 Chips
A chip library for Angular 2

```
npm install --save @jaspero/ng2-chips
```

A demo can be found [here.](http://open-source.jaspero.co/ng/ng-chips)

## Setup
Import `JasperoChipsModule` in your `@NgModule`:

```ts
@NgModule({
    imports: [
        JasperoChipsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
```

## How To Use 
To use the library simply add the component in your templates:
```typescript
<jaspero-chips></jaspero-chips>
```

## Options

You can pass the following inputs to the component:

|Name|Type|Description|Default|
|---|---|---|---|
|type|Type of the chip input.|text,number,password,date|text|
|duplicates|Should adding duplicates be allowed.|boolean|false|

This component also support Angular 2 template driven and reactive forms.

 
