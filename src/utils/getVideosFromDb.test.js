import axios from "axios";
import {getVideosFromDb} from "./index";

jest.mock("axios");

describe("testing the get videos from DB", () =>{
    test.only("the happy path", async () => {
        axios.get.mockResolvedValue({
            data : { 
                success: true,
                videos :
                [{"_id":"609c79d564793a0d888b43e8","videoId":"Ezk2AwqgS9Q","image":"https://i.ytimg.com/vi/Ezk2AwqgS9Q/hqdefault.jpg?rs=AOn4CLC3tbVBpbl-6HgmhMkEpWbjqlYlhQ&sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D","name":"launching neog.camp: roadmap to full stack dev","avatar":"https://yt3.ggpht.com/ytc/AAUvwnibnmzbi8nfRHEAzdI-8lpPGsrD1F6Cg3mAImtQ=s176-c-k-c0x00ffffff-no-rj","channelName":"Tanay Pratap","level":"beginner","views":3000,"createdAt":"2021-05-13T00:59:01.994Z","updatedAt":"2021-05-13T00:59:01.994Z","__v":0}]
            }
        })

        const videos = getVideosFromDb({ 
                success: true,
                videos :
                [{"_id":"609c79d564793a0d888b43e8","videoId":"Ezk2AwqgS9Q","image":"https://i.ytimg.com/vi/Ezk2AwqgS9Q/hqdefault.jpg?rs=AOn4CLC3tbVBpbl-6HgmhMkEpWbjqlYlhQ&sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D","name":"launching neog.camp: roadmap to full stack dev","avatar":"https://yt3.ggpht.com/ytc/AAUvwnibnmzbi8nfRHEAzdI-8lpPGsrD1F6Cg3mAImtQ=s176-c-k-c0x00ffffff-no-rj","channelName":"Tanay Pratap","level":"beginner","views":3000,"createdAt":"2021-05-13T00:59:01.994Z","updatedAt":"2021-05-13T00:59:01.994Z","__v":0}]
            });

        expect(videos).toEqual()
    })

    test("error path", async () => {

    })
})