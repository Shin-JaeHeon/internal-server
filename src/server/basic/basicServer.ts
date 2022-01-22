export class BasicInternalServer {
    private data: any = null;

    initialize(data: any) {
        this.data = data;
    }

    fetchDataAll() {
        return this.data;
    }

    static BasicInternalServer = new BasicInternalServer();
}
