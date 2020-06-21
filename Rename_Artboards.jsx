// Find and replace method for renaming artboards
// Original code contributed by Sergey Kritskiy via https://graphicdesign.stackexchange.com/questions/122658/scripting-artboards-names-in-photoshop

var doc = activeDocument;
    layers = doc.layers; //getting top layers because artboards are top layers

jsfind = prompt("Find: ", "");
jsreplace = prompt("Replace: ", "");

for (var i = 0, l = layers.length; i < l; i++)
{
    doc.activeLayer = layers[i];
    if (isArtBoard() && (jsreplace)) //checking if artboard because there could be a group or a normal layer on a top level
    {
        doc.activeLayer.name = doc.activeLayer.name.replace (jsfind, jsreplace);
    }    
}

function isArtBoard()
{
    var ref = new ActionReference();
    ref.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
    return executeActionGet(ref).getBoolean(stringIDToTypeID("artboardEnabled"));
}; // end of isArtBoard()
