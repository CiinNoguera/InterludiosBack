import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateUser } from 'src/dto/createUser.dto';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>
    ){}

    async getAllUsers() : Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async getUserByEmail(email: string): Promise<User> {
        const user = await this.userModel.findOne({ email });
        if(!user) {
            throw new NotFoundException('Mail o usuario no encontrado')
        }
        return user;
    }

    async createUser (user: CreateUser) : Promise<Partial<User>> {
        const existingUser = await this.userModel.findOne({ email: user.email });
            if(existingUser) {
            throw new BadRequestException('El email ya se encuentra registrado')
            }
        const newUser = new this.userModel(user);
        await newUser.save();

        const newUserObj = newUser.toObject();
        const { password, ...userWithoutPass } = newUserObj;
        return userWithoutPass;   
    }

     async getUserById(id: string): Promise<User> {
        if (!Types.ObjectId.isValid(id)) {
        throw new BadRequestException('ID inválido');
        }
        const user = await this.userModel.findById(id);
        if (!user) {
        throw new NotFoundException('Usuario no encontrado');
        }
        return user;
   }

   async updateUser(id: string, user: CreateUser): Promise<Partial<User>> {
    if (!Types.ObjectId.isValid(id)) {
        throw new BadRequestException('ID inválido');
    }
    const existingUser = await this.userModel.findById(id);
    if (!existingUser) {
        throw new NotFoundException('Usuario no encontrado');
    }
    const updatedUser = await this.userModel.findByIdAndUpdate(id, user, { new: true });
    const updatedUserObj = updatedUser.toObject();
    const { password, ...userWithoutPass } = updatedUserObj;
    return userWithoutPass;
   }

   async removeUser(id: string) : Promise<string> {
    if (!Types.ObjectId.isValid(id)) {
        throw new BadRequestException('ID inválido');
    }
    const deleteUser = await this.userModel.findByIdAndDelete(id);
    if (!deleteUser) {
        throw new NotFoundException('Usuario no encontrado');
    }
    return 'Usuario eliminado correctamente';
   }
      
}
