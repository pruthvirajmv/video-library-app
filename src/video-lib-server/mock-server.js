import { createServer, Model, RestSerializer } from "miragejs";
// import faker from "faker";
import videoDB from "../database/videoDataBase";

export default function setupMockVideoServer() {
  createServer({
    serializers: {
      application: RestSerializer
    },

    models: {
      video: Model
    },

    routes() {
      this.namespace = "api";
      this.timing = 3000;
      this.resource("videos");
    },

    seeds(server) {
      server.create("video", { ...videoDB });
    }
  });
}
