[![Build Status](https://travis-ci.org/Jaspero/ng-chips.svg?branch=master)](https://travis-ci.org/jaspero/ng-chips)
[![NPM Version](https://img.shields.io/npm/v/@jaspero/ng-chips.svg)](https://www.npmjs.com/package/@jaspero/ng-chips)

# NG Chips
A chip library for Angular

A demo can be found [here](https://jaspero.co/resources/projects/ng-confirmations)

## Installation

To install this library, run:

```bash
$ npm install --save @jaspero/ng-chips
```

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


## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Jaspero co.](mailto:info@jaspero.co)
