import "cytoscape";
import cytoscape from "cytoscape";

declare module "cytoscape" {
  export interface Collection {
    getInvisibleNodes: (props: any) => cytoscape.Collection;
  }
}