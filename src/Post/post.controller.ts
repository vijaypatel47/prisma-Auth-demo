import { Controller, Post, Get, Put, Delete, Param,Body } from "@nestjs/common";
import { PostService } from "./post.service";
import { Prisma } from "@prisma/client";


@Controller('post')
export class PostController{
    constructor(private readonly PostService:PostService){}

    @Post()
  create(@Body() createPostDto: Prisma.PostCreateInput) {
    return this.PostService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.PostService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.PostService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePostDto: Prisma.PostUpdateInput) {
    return this.PostService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.PostService.remove(+id);
  }
}