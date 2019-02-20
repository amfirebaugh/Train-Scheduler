# Train-Scheduler

Create a train (or bus, etc.) that runs on a schedule by filling out the form and clicking Submit! Your train will be stored in a database and you can come back to check on it later.

[Direct Link to Train Scheduler](https://amfirebaugh.github.io/Train-Scheduler/)

## How it Works

On page load the user can view previous trains created in the table shown. The user can create trains inputting information into the fields below the table. Upon clicking submit, their new train appears in the table, showing the user their train as well as the calculated next train arrival and minutes until the next train arrival. Calculations require Moment.js to handle dates and times. This data is also being stored using Firebase and thus will remain upon reload and across devices.

### Good for...?

Do you frequently use a subway, train, or bus that runs on a schedule? You can input the basic information into the form, and reference this site any time you need to know when your next ride is coming.

### Technologies

HTML, CSS, Bootstrap, jQuery, Firebase, Moment.js

### Future Development

Since this site has many real-world usages there are many ways it could grow. This site could call on several various API's to gather information for the client/user looking for specific subways, trains, busses, etc. and then interact with that data in a multitude of ways. Clients could build an entire travel schedule, build their own tables of transportation methods and schedules, etc. Using Moment.js the client could also choose how they would like to view and format the date and time information.
