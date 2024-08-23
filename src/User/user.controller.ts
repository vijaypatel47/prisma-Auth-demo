import { Controller, Post, Get, Put, Delete, Param,Body, Query, } from "@nestjs/common";
import { UserService } from "./user.service";
import {  Post as post, Prisma } from "@prisma/client";
import { CreateUserDto } from "src/dto/create-user.dto";
import { UpdateUserDto } from "src/dto/update-user.dto";

@Controller('user')
export class UserController{
    constructor(private readonly UserService:UserService){}


  @Post()
  create(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.UserService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.UserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.UserService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: Prisma.UserUpdateInput) {
    return this.UserService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.UserService.remove(+id);
  }

  // NEW DATA

  @Post('new')
  createNewData(@Body() CreateUserDto: CreateUserDto) {
    return this.UserService.createNewData(CreateUserDto);
  }

  @Get('new/data')
  findAllNew() {
    return this.UserService.findAllNew();
  }

  @Get('new/:id')
  findOneNewData(@Param('id') id: number) {
    return this.UserService.findOneNewData(+id);
  }

  @Put('new/:id')
  updateNewData(@Param('id') id: number, @Body() UpdateUserDto: UpdateUserDto) {
    return this.UserService.updateNewData(+id, UpdateUserDto);
  }

  @Delete('new/:id')
  removeNewData(@Param('id') id: number) {
    return this.UserService.remove(+id);
  }

}