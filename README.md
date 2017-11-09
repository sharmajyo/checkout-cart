#stack
react + node + mongodb


#setup
`npm install` to install dependency
in terminal navigate to checkout/server/ and run `mongo seed.js` command to install initial data in db

this will create unilever@test.com, apple@test.com, nike@test.com and ford@test.com all with password 'test' and enter discount rules for them in db or you can register and login with your own user but that will not have any discount rule added.
`npm start`

http://localhost:3000/

#frontend was primary focus so its all done except unit tests.. I thought of write them using enzyme initially but running short in time so just one test added for setup and cart

#backend is almost ready but at few places some shortcuts are take to get the things done quickly

#I was running short in time so didn't get a change to make things production ready up to my standards specially with unit testing side and proper cleanup but tried my best to make an end to end full running checkout system.
