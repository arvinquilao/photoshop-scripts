// Find and replace method for renaming layers recursively
// original code contributed by williamc3112933 via https://community.adobe.com/t5/photoshop/accessing-all-the-layers-in-all-the-layer-sets/m-p/10392742?page=1#M236052

jsfind = prompt("Find: ", "")
jsreplace = prompt("Replace: ", "")

app.activeDocument.layerSets.add(); // To make script work when top layer is not a group

processLayers(app.activeDocument);

function processLayers(o)
{
    var i;

    var layer;

    for (i = 0; i < o.layers.length; i++)
    {
        layer = o.layers[i];
        if (layer instanceof LayerSet)
        {
            // If layer set, recurse (call self).

            processLayers(layer);

        // }

        // renameLayer(layer);

        // // If you only want to affect art layers, not layer sets,

        // // move call to changeLayer into else, then it will not

        // // happen to layer sets, only art layers.

        } else

        renameLayer(layer);
        
    }
}

app.activeDocument.layerSets[0].remove(); // Remove the empty top group

function renameLayer(layer)
{
    if (jsreplace) 
    {
        if (layer.visible == true)
        {
            layer.name = layer.name.replace (jsfind, jsreplace);
        } else
        // Rename hidden layers and don't make them visible.
        {
            layer.name = layer.name.replace (jsfind, jsreplace);
            layer.visible = !layer.visible;
        } 
    }
}