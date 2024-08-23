import { Injectable } from "@nestjs/common";
import { Post, Prisma, User } from "@prisma/client";
import { PrismaService } from "prisma/prisma.service";
import { CreateUserDto } from "src/dto/create-user.dto";
import { UpdateUserDto } from "src/dto/update-user.dto";

@Injectable()
export class UserService{
    constructor(private readonly prisma:PrismaService){}

    async create(data: Prisma.UserCreateInput): Promise<User> {
        return this.prisma.user.create({ data });
      }
    
      async findAll(): Promise<User[]> {
        return this.prisma.user.findMany();
      }
    
      async findOne(id: number): Promise<User | null> {
        return this.prisma.user.findUnique({ where: { id } });
      }
    
      async update(id: number, data: Prisma.UserUpdateInput): Promise<User> {
        return this.prisma.user.update({ where: { id }, data });
      }
    
      async remove(id: number): Promise<User> {
        return this.prisma.user.delete({ where: { id } });
      }


      // NEW DATA 

      async createNewData(CreateUserDto:CreateUserDto) {
        let {posts, groups, ...userData} = CreateUserDto
        return this.prisma.user.create({
          data:{
            ...userData,
            posts:posts ? {connect:posts.map(id => ({id}))} : undefined,
            groups:groups ? {connect:groups.map(id => ({id}))} : undefined,
          }
        });
      }

      async findAllNew() {
        return this.prisma.user.findMany({
          include: {
            posts: true,
            groups: true,
          },
        });
      }

      async findOneNewData(id: number) {
        return this.prisma.user.findUnique({
          where: { id },
          include: {
            posts: true,
            groups: true,
          },
        });
      }

      async updateNewData(id: number, UpdateUserDto: UpdateUserDto) {
        const { posts, groups, ...userData } = UpdateUserDto;
        return this.prisma.user.update({
          where: { id },
          data: {
            ...userData,
            posts: posts ? { connect: posts.map(id => ({ id })) } : undefined,
            groups: groups ? { connect: groups.map(id => ({ id })) } : undefined,
          },
        });
      }
    
      async removeNewData(id: number) {
        return this.prisma.user.delete({
          where: { id },
        });
      }
    
  }