import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../models/user.interface';
import { Observable , from} from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){
        
    }
    @Post()
    create(@Body() user: User) : Observable<User>{
        return this.userService.createUser(user)
    }

    @Get()
    findAll(): Observable<User[]>{
        return this.userService.findAllUsers();
    }

    @Put(':id')
    updateUser(
        @Param('id') id: number,
        @Body() user: User
    ): Observable<UpdateResult>{
        return this.userService.updateUser(id, user)
    }

    @Delete(':id')
    delete(
        @Param('id') id: number,
    ): Observable<DeleteResult>{
        return this.userService.deleteUser(id)
    }

}
