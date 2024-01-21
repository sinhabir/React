import conf from "../conf/conf";

import { Client, ID, Databases, Query, Storage } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) 
        .setProject(conf.appwriteProjectId);  
        
        this.databases =new Databases(this.client)
        this.bucket = new Storage(this.client);
    }

    //Insert new Post
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {title,content,featuredImage,status,userId,}
            )
        } catch (error) {
            console.log ("createPost :: createPost :: error", error);
        }

    }

    //Update Post
    async updatePost(slug,{title,content,featuredImage,status}){

        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,content,featuredImage,status
                }

            )
        } catch (error) {
            console.log ("updatePost :: updatePost :: error", error);
        }

    }

    //Delete Post
    async deletePost (slug){
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log ("updatePost :: updatePost :: error", error);
            return false
        }
    }

    //getPost
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log ("getPost :: getPost :: error", error);
            return false
        }
    }
    
    //getAllPosts
    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log ("getPosts :: getPosts :: error", error);
            return false;
        }
    }

    //FileUpload
    async fileUpload(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
               console.log ("fileUpload :: fileUpload :: error", error);
               return false
        }
    }

    //deleteFile
    async deleteFile(fileId) {
        try {
             await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log ("deleteFile :: deleteFile :: error", error);
               return false
        }
    }

    //filePreview
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
            )
    }
}

const service = new Service();

export default service;