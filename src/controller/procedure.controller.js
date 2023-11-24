import { conn } from '../db/db.js';

export const GetTeacher = async (req, response) => {
    const _user = req.params._user;
    try {
        const [result] = await conn.query("CALL documentcreator.GetEmployeCode(?,@_code);", [_user]);
        if (result[0][0]._code != 0) {
            response.status(202);
            response.json({
                _code: result[0][0]._code
            });
        } else {
            response.status(404);
        }
    } catch (error) {
        return response.status(500).json({
            messaje: "Server Error"
        });
    }
}
export const DropTeacher = async (req, response) => {
    const _code = parseInt(req.params._code);
    try {
        const [result] = await conn.query("CALL documentcreator.DropTeacher(?);", [_code]);
        if (result.affectedRows > 0) {
            response.status(204);
        } else {
            response.status(404);
        }
    } catch (error) {
        return response.status(500).json({
            messaje: "Server Error"
        });
    }
}

export const UpdateTeacher = async (req, response) => {
    const _code = parseInt(req.params._code);
    const { _name, _pSur, _mSur, _mat } = req.body;
    try {
        const [result] = await conn.query("UPDATE teachers SET _name = IFNULL(?,_name), _paternalSurname = " +
            "IFNULL(?,_pSur), _maternalSurname = IFNULL(?,_mSur), _matter = IFNULL(?,_mat) WHERE _teacherCode = _code;", [_name, _pSur, _mSur, _mat, _code]);
        if (result.affectedRows > 0) {
            response.status(204);
        } else {
            response.status(404);
        }
    } catch (error) {
        return response.status(500).json({
            messaje: "Server Error"
        });
    }
}

export const AddTeacher = async (req, response) => {
    const { _code, _name, _pSur, _mSur, _mat } = req.body;
    try {
        const [result] = await conn.query("CALL documentcreator.AddDocent(?, ?, ?, ?, ?);", [_code, _name, _pSur, _mSur, _mat]);
        await conn.query("CALL CreateLogin();");
        if (result.affectedRows > 0) {
            response.status(204);
        } else {
            response.status(404);
        }
    } catch (error) {
        return response.status(500).json({
            messaje: "Server Error"
        });
    }
}
