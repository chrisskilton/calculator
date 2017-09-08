# calculator [![Build Status](https://travis-ci.org/chrisskilton/calculator.svg?branch=master)](https://travis-ci.org/chrisskilton/calculator) - travis xvfb isn't loving electron it seems.

A calculator app. For calculating a bit, then probably breaking.

![Calculator](https://i.imgur.com/q19MrKY.gif)

# The app

The app is a react,redux application packaged up using electron. It has integration test coverage of the basic functionality which is done using spectron, mocha and expectations.

# The code

The code is made up of small react components with state fed to them with redux.

# You want to run it? FINE.

`npm install; npm start;` (note: you can also run `nvm install` if you use nvm for node version management. it will install 7.9.0 which is what electron currently ships with)

# Them tests?

`npm run ci` will run the code linter and test suite.

Here's a gif of them:

![Tests](https://i.imgur.com/8o2NtL9.gif)

# Issues

- The CSS is loaded at the very top in the index.html rather than per-component. This was a case of "try for a bit but don't waste too much time on it". - FIXED
- The commits aren't as atomic as I'd like. This is down to inexperience with react and redux and a lot of shuffling around. Many, many commits and then a mammoth rebase at the end. I love rebase.
- There are only a few integration tests covering some core calculator functionality. I'd ideally have supplemented these integration tests with unit tests of each component/module. - UPDATE: there is now a unittest command too. currently only a couple of example tests on the reducer.
- Code coverage tools are missing here. I like to implement these as part of CI processes to maintain a high level of code coverage in the tests. Istanbul has always been good for this.
- There may be many breaches of best practice here. This is my first React app.
- The development workflow is rubbish. It's a "make a change, run webpack, refresh the app" workflow. I had a quick stab at using webpack-dev-server to handle hot reloading but one or more paths must have been wrong because it didn't work as expected.
- No CI job on the repo (although I might enable it on Travis so this might show up) - FIXED (well, enabled but only one of the tests pass on xvfb on Travis)
- Edge cases aren't tested at all. I would reject this PR if it came in for review because the test coverage is not up to scratch.
- There are parts of the code, even in this small example, that I would refactor out into smaller modules. The reducer would be my first bit of spelunking
- I missed some code reuse opportunities in the calculator button components. I'd tidy that up for more reusability.

