import { HpttRequest } from ".";

class ContentService extends HpttRequest {
    constructor(){
     super('https://jsonplaceholder.typicode.com');
    }

    getAllPost(){
        return this.get('posts');
    }
    getAllComments(){
        return this.get('comments');
    }
    addNewContent(data){
        return this.post('posts',data)
    }
    editContent(id,data){
        return this.put('posts',data,id)
    }
    getComments(id){
        return this.getbyId('comments',id);
    }
    
}

export const contentService = new ContentService();

