var start = 0;
var ende = 10;

if (process.argv.length > 3)
{
    start = Number(process.argv[2]);
    ende = Number(process.argv[3]);
}

for (var i = start; i <= ende; i++)
{
    console.log((i % 2 == 0 ? "Gerade" : "Ungerade") + ": " + i.toString());
}
