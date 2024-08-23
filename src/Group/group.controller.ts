import { Controller, Post, Get, Put, Delete, Param,Body } from "@nestjs/common";

import { GroupService } from "./group.service";
import { Prisma } from "@prisma/client";

@Controller('group')
export class GroupController{
    constructor(private readonly GroupService:GroupService){}


  @Post()
  create(@Body() createGroupDto: Prisma.GroupCreateInput) {
    return this.GroupService.create(createGroupDto);
  }

  @Get()
  findAll() {
    return this.GroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.GroupService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateGroupDto: Prisma.GroupUpdateInput) {
    return this.GroupService.update(+id, updateGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.GroupService.remove(+id);
  }
}