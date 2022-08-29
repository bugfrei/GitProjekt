const von = process.argv[2];
const bis = process.argv[3];

for (var i = von; i < bis; i++)
{
    if (i % 2 == 0)
    {
        console.log("Gerade: " + i.toString());
    }
    else
    {
        console.log("Ungerade: " + i.toString());
    }
}

