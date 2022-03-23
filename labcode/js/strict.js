// primitive  data types
console.log( '0 === 0 =>', 0 === 0 );
console.log( '0 === -0 =>', 0 === -0 );
console.log( '1 === 1 =>', 1 === 1 );
console.log( '1 === -1 =>', 1 === -1 );
console.log( '1 === 2 =>', 1 === 2 );
console.log( '"1" === "1" =>', "1" === "1" );
console.log( '"hello" === "world" =>', "hello" === "world" );
console.log( 'true === true =>', true === true );
console.log( 'true !== false =>', true !== false );
console.log( 'Symbol() === Symbol() =>', Symbol() === Symbol() );
console.log( 'null === null =>', null === null );
console.log( 'undef === undef =>', undefined === undefined );
console.log( 'undef === null =>', undefined === null );

/*----------*/

// abstract data types
console.log( '(function(){}) === (function(){}) =>', (function(){}) === (function(){}) );
console.log( '{} === {} =>', {} === {} );
console.log( '{a:1} === {a:1} =>', {a:1} === {a:1} );
console.log( '[] === [] =>', [] === [] );
console.log( '[1] === [1] =>', [1] === [1] );

var obj = { a: 1 }, arr = [ 1 ], func = function(){};
console.log( 'obj === obj =>', obj === obj );
console.log( 'arr === arr =>', arr === arr );
console.log( 'func === func =>', func === func );

/*----------*/

// special cases
console.log( 'NaN === NaN =>', NaN === NaN );
console.log( 'Infinity === Infinity =>', Infinity === Infinity );