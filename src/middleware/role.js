// import { Request, Response, NextFunction } from "express";
// import { getRepository } from "typeorm";
// import { users } from "../entity/Users";

// export const checkRole = (roles:Array<string>) => {
//     return async (req: Request, res: Response, next: NextFunction)=> {
//         const {userId} = res.locals.jwtPayload;
        
//         const userRepository = getRepository(users);

//         let user: users;
//         try {
//             user = await userRepository.findOneOrFail(userId);
//         } catch (e) {
//             return res.status(401).send();
//         }

//         // Check 
//         const {role} = user;
//         if (roles.includes(role)){
            
//             next();
            
//         }else {
//             res.status(401).json({menssage: 'Not Authorized'})
//         }

//     }
// }