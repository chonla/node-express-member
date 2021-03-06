const Member = require('../models/member.model');


exports.getMembers = async (req, res, next) => {
    try {
        let members = await Member.find().sort({
            "_id": 1
        });
        if (members.length == 0) {
            next({
                code: 404,
                data: new Error('member is not found.')
            })
        } else {
            res.json(members)
        }
    } catch (err) {
        next({
            code: 500,
            data: err
        })
        return
    }
    return
};

exports.getMember = async (req, res, next) => {
    try {
        let member = await Member.findOne({
            _id: req.params.id
        });
        if (member === null) {
            next({
                code: 404,
                data: new Error('member is not found.')
            })
        } else {
            res.json(member)
        }
    } catch (err) {
        if (err.name === "CastError") {
            next({
                code: 404,
                data: new Error('member is not found.')
            })
        } else {
            next({
                code: 500,
                data: err
            })
        }
        return
    }
    return
};

exports.createMember = async (req, res, next) => {
    const model = {
        name: req.body.name,
        imgUrl: req.body.imgUrl,
        instagramId: req.body.instagramId,
    }
    try {
        let result = await Member.findOne(model);
        if (result) {
            next({
                code: 409,
                data: new Error("member has been already added.")
            })
        } else {
            await Member.create(model);
            res.status(201)
            res.json({
                message: "member has been created."
            })
        }
    } catch (err) {
        next({
            code: 500,
            data: err
        })
        return
    }
};
exports.updateMember = async (req, res, next) => {
    const model = {
        name: req.body.name,
        imgUrl: req.body.imgUrl,
        instagramId: req.body.instagramId,
    }
    try {
        let member = await Member.findOne({
            _id: req.params.id
        })
        if (member) {
            await Member.findOneAndUpdate({
                _id: req.params.id
            }, model)

            res.json({
                message: "member has been updated."
            })
        } else {
            next({
                code: 404,
                data: new Error('member is not found.')
            })
        }
    } catch (err) {
        next({
            code: 500,
            data: err
        })
    }
    return
};
exports.deleteMember = async (req, res, next) => {
    try {
        await Member.deleteOne({
            _id: req.params.id
        })
        res.json({
            message: "member has been delete"
        })

    } catch (err) {
        next({
            code: 500,
            data: err
        })
    }
    return
};