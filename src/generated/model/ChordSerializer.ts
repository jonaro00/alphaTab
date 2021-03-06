// <auto-generated>
// This code was auto-generated.
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
// </auto-generated>
import { Chord } from "@src/model/Chord";
import { JsonHelper } from "@src/io/JsonHelper";
export class ChordSerializer {
    public static fromJson(obj: Chord, m: unknown): void {
        if (!m) {
            return;
        } 
        JsonHelper.forEach(m, (v, k) => this.setProperty(obj, k.toLowerCase(), v)); 
    }
    public static toJson(obj: Chord | null): Map<string, unknown> | null {
        if (!obj) {
            return null;
        } 
        const o = new Map<string, unknown>(); 
        o.set("name", obj.name); 
        o.set("firstFret", obj.firstFret); 
        o.set("strings", obj.strings); 
        o.set("barreFrets", obj.barreFrets); 
        o.set("showName", obj.showName); 
        o.set("showDiagram", obj.showDiagram); 
        o.set("showFingering", obj.showFingering); 
        return o; 
    }
    public static setProperty(obj: Chord, property: string, v: unknown): boolean {
        switch (property) {
            case "name":
                obj.name = (v! as string);
                return true;
            case "firstfret":
                obj.firstFret = (v! as number);
                return true;
            case "strings":
                obj.strings = (v! as number[]);
                return true;
            case "barrefrets":
                obj.barreFrets = (v! as number[]);
                return true;
            case "showname":
                obj.showName = (v! as boolean);
                return true;
            case "showdiagram":
                obj.showDiagram = (v! as boolean);
                return true;
            case "showfingering":
                obj.showFingering = (v! as boolean);
                return true;
        } 
        return false; 
    }
}

