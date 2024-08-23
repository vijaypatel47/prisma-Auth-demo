import { Injectable } from "@nestjs/common";
import { Prisma , Group} from "@prisma/client";
import exp from "constants";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class GroupService{
    constructor(private readonly prisma:PrismaService){}

    async create(data: Prisma.GroupCreateInput): Promise<Group> {
        return this.prisma.group.create({ data });
      }
    
      async findAll(): Promise<Group[]> {
        return this.prisma.group.findMany();
      }
    
      async findOne(id: number): Promise<Group | null> {
        return this.prisma.group.findUnique({ where: { id } });
      }
    
      async update(id: number, data: Prisma.GroupUpdateInput): Promise<Group> {
        return this.prisma.group.update({ where: { id }, data });
      }
    
      async remove(id: number): Promise<Group> {
        return this.prisma.group.delete({ where: { id } });
      }
}