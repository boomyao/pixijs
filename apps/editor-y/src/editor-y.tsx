export class Editor {
    currentLayout?: LayoutModel
    constructor() {

    }
    toggleLayout(layout: LayoutModel | number) {
        
    }
    createLayout() {
        return () => <Layout layout={this.currentLayout} options={this.options} />;
    }
}